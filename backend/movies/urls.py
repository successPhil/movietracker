from django.urls import path

from . import views

urlpatterns = [

path('', views.MovieAPIView.as_view(), name='movie-list'),
path('new', views.NewMovieAPIView.as_view(), name='movie-list'),
path('detail', views.DetailMovieAPIView.as_view(), name='detail')

]