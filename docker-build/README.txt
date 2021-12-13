#cleanup
rm -rf node_modules; \
rm -rf dist; \

#Run on Desktop
	sudo apt install npm; \
	npm audit fix; \
	npm install typescript --save; \
	npm install child_process --save; \
	npm install file-system --save;
	npm init --yes;  \
	tsc --init; \
	node ./src/main.ts;

#Run on Docker
	#docker Dev
		cp ./Dockerfile-Dev ./Dockerfile;
		docker build -t task_image_dev .;
		docker run -it -p 4444:4444 task_image_dev;

	#docker Prod
		cp ./Dockerfile-Prod ./Dockerfile;
		docker build -t task_image_prod .;
		docker run -it -p 4444:4444 task_image_prod;