from django.contrib import admin
from .models import Product, Category, Offer

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Offer)

