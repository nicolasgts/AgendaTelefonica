from django.conf.urls import patterns, url


urlpatterns = patterns('cart.views',
	url(r'^$', 'index'),  # NOQA
	url(r'^adicionar/', 'adicionar_item'),
	url(r'^atualizar/', 'atualizar_item'),
	url(r'^excluir/(?P<index>[0-9]+)', 'excluir_item'),
)