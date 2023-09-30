from dotenv import load_dotenv 
import os
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


load_dotenv()

class MovieAPIView(APIView):
    def get(self, request):
        movie_title = request.GET.get("name", '')
        try:
            with open ("api.txt", 'a') as f:
                f.write(os.environ['API_KEY'])
            url = f"http://www.omdbapi.com/?s={movie_title}&apikey={os.environ['API_KEY']}"  # Replace with the correct URL
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                return Response(data, status=status.HTTP_200_OK)
            else:
                raise Exception("Failed to fetch Spiderman movies")
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class NewMovieAPIView(APIView):
    def get(self, request):
        try:
            url = f"https://moviesdatabase.p.rapidapi.com/titles/x/upcoming"
            
            headers = {
                "X-RapidAPI-Key": os.environ['UPCOMING_API_KEY'],
                "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
                }
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                data = response.json()
                return Response(data, status=status.HTTP_200_OK)
            else:
                raise Exception("Failed to fetch Spiderman movies")
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class DetailMovieAPIView(APIView):
    def get(self, request):
        movie_id = request.GET.get("id", '')
        print(f"Received movie_id: {movie_id}")
        try:
            
            url = f"http://www.omdbapi.com/?i={movie_id}&apikey={os.environ['API_KEY']}"  # Replace with the correct URL
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                return Response(data, status=status.HTTP_200_OK)
            else:
                raise Exception("Failed to fetch movies")
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)