FROM google/cloud-sdk:alpine

ENV HOME /tmp

RUN apk add --update nodejs npm yarn

RUN apk update && apk upgrade &&
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories &&
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories &&
    apk add --no-cache
    chromium@edge
    nss@edge
    freetype@edge
    harfbuzz@edge
    ttf-freefont@edge
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
#ENV HOME /tmp
#RUN apk add --update nodejs npm yarn

# Do image configuration
#RUN /bin/bash -c 'echo This would generally be apt-get or other system conf'
#ENV myCustomEnvVar="This is a sample."\
#    otherEnvVar="This is also a sample"
