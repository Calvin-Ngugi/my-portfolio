const Projects = ({ isDark }: any) => {
  return (
    <div className="w-[80%] md:w-[70%] pt-28 pb-5 m-auto" id="projects">
      <h1 className="text-center mb-5 font-bold text-[32px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          className={`p-4 border-[2px] rounded-xl flex flex-col items-center ${
            isDark
              ? `bg-slate-950 border-gray-800`
              : `bg-slate-200 border-gray-200`
          }`}
        >
          <img src="e-waiter.PNG" alt="" className="h-[60%] mb-3" />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos iure, sed eaque exercitationem dignissimos aut inventore
          </p>
          <div className="w-[100%] flex justify-around mt-5">
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white hover:bg-slate-100 hover:text-slate-900 hover:font-semibold`
                  : `border-black hover:bg-slate-900 hover:text-slate-100 hover:font-semibold`
              }`}
            >
              <a
                href="https://e-waiter.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white text-green-600 hover:bg-slate-100 hover:text-blue-950 hover:font-semibold`
                  : `border-black text-blue-950 hover:bg-slate-900 hover:text-green-600 hover:font-semibold`
              }`}
            >
              <a
                href="https://github.com/Calvin-Ngugi/e-waiter"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div
          className={`p-4 border-[2px]  rounded-xl flex flex-col items-center ${
            isDark
              ? `bg-slate-950 border-gray-800`
              : `bg-slate-200 border-gray-200`
          }`}
        >
          <img src="anime.PNG" alt="" className="h-[60%] mb-3" />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos iure, sed eaque exercitationem dignissimos aut inventore
          </p>
          <div className="w-[100%] flex justify-around mt-5">
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white hover:bg-slate-100 hover:text-slate-900 hover:font-semibold`
                  : `border-black hover:bg-slate-900 hover:text-slate-100 hover:font-semibold`
              }`}
            >
              <a
                href="https://react-anime-merch-project.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white text-green-600 hover:bg-slate-100 hover:text-blue-950 hover:font-semibold`
                  : `border-black text-blue-950 hover:bg-slate-900 hover:text-green-600 hover:font-semibold`
              }`}
            >
              <a
                href="https://github.com/Calvin-Ngugi/react-anime-merch-project"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div
          className={`p-4 border-[2px] rounded-xl flex flex-col items-center ${
            isDark
              ? `bg-slate-950 border-gray-800`
              : `bg-slate-200 border-gray-200`
          }`}
        >
          <img src="techware.PNG" alt="" className="h-[60%] mb-3" />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos iure, sed eaque exercitationem dignissimos aut inventore
          </p>
          <div className="w-[100%] flex justify-around mt-5">
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white hover:bg-slate-100 hover:text-slate-900 hover:font-semibold`
                  : `border-black hover:bg-slate-900 hover:text-slate-100 hover:font-semibold`
              }`}
            >
              <a
                href="https://techware.co.ke/"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
