import Base from "@layouts/Baseof";
import { useState } from "react";
import { getListPage } from "@lib/contentParser";
import { TemplatePreview } from '@layouts/components/TemplatePreview';
import Image from 'next/image';


const Demo = ({ frontmatter }) => {
  const { templates } = frontmatter;
  return (
    <Base title="Let's get started">
      <section className="section bg-theme-light">
      <div className="container">
        <h4 className="text-center">Let's get Started</h4>
        </div>
        </section>
     <div>
      <TemplatePreview templates={templates} />
     </div>
    </Base>
  );
}

export const getStaticProps = async () => {
  const demoPage = await getListPage("content/_demo.md");
  const { frontmatter } = demoPage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Demo;

