FROM google/cloud-sdk:alpine

ENV HOME /tmp
RUN apk add --update nodejs npm yarn
RUN apt-get install docker-compose

#ENV HOME /tmp
#RUN apk add --update nodejs npm yarn

# Do image configuration
#RUN /bin/bash -c 'echo This would generally be apt-get or other system conf'
#ENV myCustomEnvVar="This is a sample."\
#    otherEnvVar="This is also a sample"
