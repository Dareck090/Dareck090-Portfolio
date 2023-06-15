from django.urls import path
from .import views

urlpatterns = [
    path('computadoras/', views.computadoras, name='computadoras'),
    path('tabletas/', views.tabletas, name='tabletas'),
    path('drones-y-camaras/', views.drones_camaras, name='drones_camaras'),
    path('celulares/', views.celulares, name='celulares'),
    path('audifonos/', views.audifonos, name='audifonos'),
    path('bocinas/', views.bocinas, name='bocinas'),
    path('tv-cine/', views.tv_cine, name='tv_cine'),
    path('tecnologia-portatil/', views.tecnologia_portatil, name='tecnologia_portatil'),
    path('ofertas/', views.oferta_view, name='ofertas'),
    path('comprar-todo/', views.comprar_todo, name='comprar-todo'),
    path('', views.index, name='index'),
    path('<slug>/', views.product_view, name='product_view'),
]