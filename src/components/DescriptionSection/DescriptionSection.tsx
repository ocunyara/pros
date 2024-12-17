import React, { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { getDescriptionSection } from "@/queries/contentful";
import { IdProps } from "@/types/entry";
import { DescriptionSectionTypes, EmbeddedAssetNode } from "@/components/DescriptionSection/DescriptionSection.types";
import Image from 'next/image';
import { Document, Link } from '@contentful/rich-text-types'
import classes from "@/components/RichText/styles/RichText.module.css";

function renderOptions(links: Link) {
  const assetMap = new Map();
  const entryMap = new Map();

  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      // For embed Entry !!!
      //
      // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      //   const entry = entryMap.get(node.data.target.sys.id);
      //   if (entry.__typename === "SplitMediaSection") {
      //     return (
      //      <SplitMediaSection {...entry} />
      //     );
      //   }
      //   if (entry.__typename === "Carousel") {
      //     return (
      //      <Carousel {...entry} />
      //     );
      //   }
      // },
      [BLOCKS.EMBEDDED_ASSET]: (node: EmbeddedAssetNode) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <div className='block w-full my-6'>
            <Image className='w-full' src={asset.url} width={asset.width} height={asset.height} alt={asset.title} />
          </div>
        );
      },
    },
  };
}

const DescriptionSection = (props: IdProps) => {
  const [cmsData, setSmcData] = useState<DescriptionSectionTypes | null>(null);
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


  return (
    <div className={`px-4 lg:self-center flex flex-wrap pt-10 lg:pt-20 lg:pb-10 max-w-[1180px] m-auto ${classes['rich-text']}`}>
      {documentToReactComponents(cmsData.desciprtion.json, renderOptions(cmsData.desciprtion.links))}
    </div>
  )
}

export default DescriptionSection;