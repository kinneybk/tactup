all: server

server:
	ruby -run -e httpd . -p 3000
