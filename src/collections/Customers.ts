import { seflOrAdmin } from "../access/seflOrAdmin";
import { text } from "express";
import { CollectionConfig } from "payload/types";

export const Customers: CollectionConfig = {
  slug: "customers",
  auth: true,
  access: {
    create: () => true,
    read: seflOrAdmin,
    update: seflOrAdmin,
    delete: ({ req: { user } }) => {
      return user?.collection === "users";
    },
  },
  fields: [
    {
      name: "firstname",
      type: "text",
      required: true,
    },
    {
      name: "lastname",
      type: "text",
      required: true,
    },
  ],
};
