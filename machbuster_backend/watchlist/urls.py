from django.urls import path
from .views import AddToWatchlist, RemoveFromWatchlist
urlpatterns = [
path('add/', AddToWatchlist.as_view(), name='add_to_watchlist'),
path('remove/<str:movie_id>/', RemoveFromWatchlist.as_view(),),
]