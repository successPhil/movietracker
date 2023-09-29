from django.urls import path

from . import views

urlpatterns = [

path('', views.MovieAPIView.as_view(), name='movie-list'),
path('new', views.newMovieAPIView.as_view(), name='movie-list'),

]