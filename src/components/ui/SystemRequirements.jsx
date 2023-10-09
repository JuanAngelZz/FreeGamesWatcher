const SystemRequirements = ({ os, processor, memory, graphics, storage }) => {

  return (
    <section>
      <h2 className="my-8 text-center text-3xl">System Requirements</h2>
      <div className="mx-auto border border-white w-[500px] rounded-xl flex flex-col shadow-lg shadow-slate-700">
        <div className="border-b border-white flex w-full">
          <div className="basis-1/2 border-r border-white p-4 text-lg flex items-center">
            Operating System
          </div>
          <div className="basis-1/2 border-l border-white p-4 text-lg flex items-center">
            {os || "No specified"}
          </div>
        </div>
        <div className="border-b border-white flex w-full">
          <div className="basis-1/2 border-r border-white p-4 text-lg flex items-center">
            Processor
          </div>
          <div className="basis-1/2 border-l border-white p-4 text-lg flex items-center">
            {processor || "No specified"}
          </div>
        </div>
        <div className="border-b border-white flex w-full">
          <div className="basis-1/2 border-r border-white p-4 text-lg flex items-center">
            Memory
          </div>
          <div className="basis-1/2 border-l border-white p-4 text-lg flex items-center">
            {memory || "No specified"}
          </div>
        </div>
        <div className="border-b border-white flex w-full">
          <div className="basis-1/2 border-r border-white p-4 text-lg flex items-center">
            GPU
          </div>
          <div className="basis-1/2 border-l border-white p-4 text-lg flex items-center">
            {graphics || "No specified"}
          </div>
        </div>
        <div className="flex w-full">
          <div className="basis-1/2 border-r border-white p-4 text-lg flex items-center">
            Storage
          </div>
          <div className="basis-1/2 border-l border-white p-4 text-lg flex items-center">
            {storage || "No specified"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
