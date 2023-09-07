#!/usr/bin/env bash
DEV_BRANCH="deployment"
DEPLOYMENT_BRANCH="main"

cp -r simple_mongo/src/schema-and-models/* simple_graphql/src/schema-and-models

git checkout $DEPLOYMENT_BRANCH
git checkout $DEV_BRANCH -- simple_graphql/src/schema-and-models/*

git add simple_graphql/src/schema-and-models/*
git commit -m "Copy and update schema files"
git push origin $DEPLOYMENT_BRANCH
