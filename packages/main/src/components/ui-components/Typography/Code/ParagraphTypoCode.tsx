import { Blockquote } from 'flowbite-react';

const ParagraphTypoCode = () => {
  return (
    <>
      <p className="mb-3">
        Track work across the enterprise through an open, collaborative platform. Link issues across
        Jira and ingest data from other software development tools, so your IT support and
        operations teams have richer contextual information to rapidly respond to requests,
        incidents, and changes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <p className="mb-3">
          Track work across the enterprise through an open, collaborative platform. Link issues
          across Jira and ingest data from other software development tools, so your IT support and
          operations teams have richer contextual information to rapidly respond to requests,
          incidents, and changes.
        </p>
        <Blockquote className="mb-3 text-xl font-semibold italic">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        </Blockquote>
      </div>
      <p className="mb-3">
        Deliver great service experiences fast - without the complexity of traditional ITSM
        solutions.Accelerate critical development work, eliminate toil, and deploy changes with
        ease, with a complete audit trail for every change.
      </p>
    </>
  );
};

export default ParagraphTypoCode;
