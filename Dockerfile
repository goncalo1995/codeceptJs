FROM codeception/codeceptjs

RUN npm i codeceptjs-puppeteer

RUN ln -sf /codecept/bin/codecept.js /usr/local/bin/codeceptjs

#ENV HOME /tmp
#RUN apk add --update nodejs npm yarn

# Do image configuration
#RUN /bin/bash -c 'echo This would generally be apt-get or other system conf'
#ENV myCustomEnvVar="This is a sample."\
#    otherEnvVar="This is also a sample"
