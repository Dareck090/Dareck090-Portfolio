from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Product, Category, Offer
from urllib.parse import urlparse
from django.urls import reverse

def index(request):
    products = Product.objects.all()
    context = {
        'products': products,
    }
    return render(request, 'index.html', context)

def product_view(request, slug):
    products = list(Product.objects.all())
    product = Product.objects.filter(slug=slug).first()

    if not product:
        return HttpResponse('Product not found', status=404)
    
    offer = Offer.objects.filter(product=product).first()
    
    #Para cambiar de producto
    index = products.index(product)
    prev_product = products[index - 1] if index > 0 else None
    next_product = products[index + 1] if index < len(products) - 1 else None

    # Capturando rutas anteriores
    previous_url = request.META.get('HTTP_REFERER')
    parsed_url = urlparse(previous_url)

    previous_path = parsed_url.path.strip("/").replace("-", " ").capitalize()

    # Modificación para la ruta de categoría actual
    current_category = product.product_category

    if current_category:
        current_category_url = current_category.product_category  # Ajusta esto según tu modelo de categoría
    else:
        current_category_url = 'comprar-todo'  # Si no hay categoría, muestra "Comprar Todos"

    context = {
        'product': product,
        'offer': offer,
        'prev_product': prev_product,
        'next_product': next_product,
        'category': product.product_category,
        'previous_url': previous_url,
        'previous_path': previous_path,
        'current_category_url': current_category_url  # Agrega la variable al contexto
    }

    return render(request, 'store/view-product.html', context)

def comprar_todo(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    category_filter = request.GET.get('category')
    show_offers = request.GET.get('offers', None)

    if category_filter == 'Todos':
        products = Product.objects.all()
    elif category_filter:
        products = products.filter(product_category__product_category=category_filter)
    else:
        products = Product.objects.all()
    
    products_on_sale = Offer.objects.filter(product__in=products)

    if show_offers:
        products = products.filter(offer__isnull=False)

    context = {
        'products': products,
        'categories': categories,
        'products_on_sale': products_on_sale,
        'category_filter': category_filter,
        'show_offers': show_offers,
    }
    return render(request, 'store/products.html', context)

# Definiendo las vistas por categorias de productos
def category_view(request, category):
    products = Product.objects.filter(product_category__product_category=category)
    show_offers = request.GET.get('offers', None)

    if show_offers:
        products = products.filter(offer__isnull=False)

    context = {
        'products': products,
        'category': category,
        'show_offers': show_offers,
    }
    return render(request, 'store/products_category.html', context)


def computadoras(request):
    return category_view(request, "Computadoras")

def tabletas(request):
    return category_view(request, "Tabletas")
    
def drones_camaras(request):
    return category_view(request, "Drones y cámaras")

def celulares(request):
    return category_view(request, "Celulares")

def audifonos(request):
    return category_view(request, "Audifonos")

def bocinas(request):
    return category_view(request, "Bocinas")

def tv_cine(request):
    return category_view(request, "T.V. y cine en casa")

def tecnologia_portatil(request):
    return category_view(request, "Tecnología portatil")

def oferta_view(request):
    products = Product.objects.filter(offer__isnull=False)
    categories = Category.objects.all()
    category_filter = request.GET.get('category')
    show_offers = request.GET.get('offers', None)

    if category_filter == 'Todos':
        # Filtrar por categoría solo si se selecciona "Todos"
        products = products.filter(product_category__in=categories)
    elif category_filter:
        # Filtrar por categoría seleccionada
        products = products.filter(product_category__product_category=category_filter)

    context = {
        'products': products,
        'category': 'Oferta',
        'show_offers': show_offers,
        'categories': categories,
        'category_filter': category_filter,
    }
    return render(request, 'store/products_category.html', context)