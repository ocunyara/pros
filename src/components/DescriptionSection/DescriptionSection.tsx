import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import {IdProps} from "@/types/entry";
import React, {useEffect, useState} from "react";
import { getDescriptionSection } from "@/queries/contentful";

const renderOptions = (links) => {
  const assetMap = new Map();
  const entryMap = new Map();
  const entryBlockMap = new Map();

  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return (
          <img src={asset.url} alt="My image alt text" />
        );
      },
    },
  };
}


const DescriptionSection = (props: IdProps) => {
  const [cmsData, setSmcData] = useState<null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const { sys } = props;

  useEffect(() => {
    getDescriptionSection(sys.id)
      .then((result) => {
        setSmcData(result)
      })
      .catch((err: Error) => {
        setError(err);
        console.error(error);
      })
  }, []);

  if (!cmsData) return <p>Loading...</p>;

  console.log(cmsData)

  return <>{documentToReactComponents(cmsData.desciprtion.json, renderOptions(cmsData.desciprtion.links))}</>;
}

export default DescriptionSection;