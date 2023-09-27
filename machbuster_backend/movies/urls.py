from django.urls import path

from . import views

urlpatterns = [

path('', views.MovieAPIView.as_view(), name='movie-list'),

]