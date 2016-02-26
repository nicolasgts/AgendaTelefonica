

from django.shortcuts import render
from django.http import HttpResponse
import json

# Create your views here.

def index(request):
	return render(request, 'index.html', {})

def adicionar_item(request):
	itens_pedido = request.session.get('itens_pedido', [])

	item = json.loads(request.body)['item']
	itens_pedido.append(item)

	request.session['itens_pedido'] = itens_pedido
	return HttpResponse(json.dumps(itens_pedido))

def excluir_item(request, index):
	itens_pedido = request.session.get('itens_pedido', [])

	del itens_pedido[int(index)]

	request.session['itens_pedido'] = itens_pedido
	return HttpResponse(json.dumps(itens_pedido))




http://blog.concretesolutions.com.br/2015/03/usando-angularjs-com-django/