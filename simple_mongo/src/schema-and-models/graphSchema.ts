// graphql/schema.ts

import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'graphql-tag';
import { Book } from './model';
import { BookModel } from './mongoschema';

const typeDefs = gql`
  type Book {
    Title: String!
    Author: String!
  }

  type Query {
    getBook(Title: String!): Book
  }

  type Mutation {
    addBook(Title: String!, Author: String!): Book
  }
`;

const resolvers = {
  Query: {
    getBook: async (_parent, args: { Title: string }) => {
      return await BookModel.findOne({ Title: args.Title });
    },
  },
  Mutation: {
    addBook: (_parent, args: { Title: string, Author: string }) => {
      const newBook = new BookModel({ Title: args.Title, Author: args.Author });
      newBook.save()
      return newBook;
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;
