from django.db import models
from django.db.models.signals import pre_save
from electronic_store.utils import unique_slug_generator
from django.core.validators import MaxValueValidator

class Category(models.Model):
    product_category = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return self.product_category

class Product(models.Model):
    product_code = models.CharField(max_length=6, null=False, blank=False, unique=True)
    product_name = models.CharField(max_length=60, null=False, blank=False)
    product_description = models.TextField(blank=False, null=False)
    product_image = models.ImageField(upload_to='images', blank=False, null=False)
    product_category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=False, null=False, help_text="Select category")
    product_price =  models.DecimalField(max_digits=6, decimal_places=2, blank=False, null=False, help_text="The price is with decimal value")
    product_stock = models.IntegerField(blank=False, null=False, help_text="MAX STOCK 999")
    slug = models.SlugField(max_length = 250, null = True, blank = True, unique=True)

    def __str__(self):
        return self.product_name
    
class Offer(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    discount = models.DecimalField(max_digits=5, decimal_places=2, validators=[MaxValueValidator(50)], help_text="Solo aplicamos descuento hasta el 50%")
    product_total_offer = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.calculate_product_total_offer()  # Llama al método para calcular el precio con descuento
        super().save(*args, **kwargs)

    def calculate_product_total_offer(self):
        discount_decimal = self.discount / 100
        self.product_total_offer = self.product.product_price - (self.product.product_price * discount_decimal)

    def is_product_on_sale(self):
        return self.product_total_offer is not None

    def __str__(self):
        return f"Offer for {self.product.product_name} - Discount: {self.discount}%"

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name


class GuestUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name


class PaymentMethod(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='payment_methods')

    def __str__(self):
        return self.name


class CreditCard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cardholder_name = models.CharField(max_length=100)
    card_number = models.CharField(max_length=18)
    expiration_date = models.CharField(max_length=5)
    authorization_number = models.CharField(max_length=3)

    def __str__(self):
        return self.cardholder_name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderItem')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_ordered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.pk}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f"Order #{self.order.pk} - {self.product}"

# Slug generator
def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(slug_generator, sender=Product)