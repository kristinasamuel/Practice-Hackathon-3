import { createClient } from "@sanity/client";

import {apiVersion,dataset,projectId,token} from "../env"

export const client = createClient({
  projectId: 'ib15c2o6',
  dataset: 'production',
  apiVersion: '2025-01-11',  
  useCdn: true,
});