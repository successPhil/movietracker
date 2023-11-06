from django.urls import path
from .views import Watchlist, RemoveFromWatchlist
urlpatterns = [
path('', Watchlist.as_view(), name='add_to_watchlist'),
path('remove/<str:movie_id>/', RemoveFromWatchlist.as_view(),),
]