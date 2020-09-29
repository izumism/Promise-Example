#!/bin/bash

sudo docker container run -it --rm -v $PWD/src:/app/src typescript:latest bash
