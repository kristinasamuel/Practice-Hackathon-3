import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: 'ib15c2o6',
  dataset: 'production',
  apiVersion: '2023-10-10',  
  useCdn: true,
});