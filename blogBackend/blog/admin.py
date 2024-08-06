from django.contrib import admin
from .models import Articles

class ArticlesAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'time', 'content_box', 'content_box_2')
# Register your models here.

admin.site.register(Articles, ArticlesAdmin)