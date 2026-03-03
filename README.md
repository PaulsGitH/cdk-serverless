# cdk-serverless

Serverless backend deployed using AWS CDK v2. This project expands beyond a single function to demonstrate DynamoDB data modelling, query driven access patterns, seeded data, and structured Lambda handlers.

## Architecture Overview

This stack provisions:

- DynamoDB table for movies
- Optional DynamoDB table for movie cast data
- Local Secondary Index for flexible query patterns
- Lambda functions that read from DynamoDB
- IAM permissions defined via CDK grants
- Seed data applied during stack creation using a CDK custom resource

The design emphasises access pattern driven NoSQL modelling and clean separation between infrastructure and application logic.

## Technology Stack

- AWS CDK v2
- TypeScript
- AWS Lambda
- DynamoDB
- AWS SDK v3 with DynamoDBDocumentClient

## Repository Structure

- bin  
  CDK application entry point

- lib  
  Infrastructure definitions

- lambdas  
  Lambda handlers

- seed  
  Initial dataset used during provisioning

- shared  
  Shared types and helper utilities

## Installation

npm install

## Deployment

cdk deploy

If reseeding is required, recreate the stack:

cdk destroy  
cdk deploy

## DynamoDB Access Patterns

Movies table:

- Get by id
- Scan for all items

Movie cast table:

- Query by partition key movieId
- Query by actorName prefix
- Query by roleName prefix via local secondary index

## Infrastructure Lifecycle

To remove all provisioned infrastructure:

cdk destroy

## Key Concepts Demonstrated

- Access pattern driven DynamoDB design
- Composite keys and secondary indexing
- Lambda environment variable configuration
- IAM least privilege enforcement
- Automated data seeding during stack creation
