import { motion } from 'framer-motion';
const Projects = ({ isDark }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
      className="w-[80%] md:w-[70%] pt-28 pb-5 m-auto"
      id="projects"
    >
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
          <h2 className="text-center mb-2 font-semibold">E-waiter App</h2>
          <p className="text-center">
            The E-waiter app is an app that can be used in restaurants to place
            orders. Once an order is placed it reflects on the staff side and on
            the orders tab. It is created using react and firebase
          </p>
          <div className="w-[100%] flex justify-around mt-3">
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
          <h2 className="text-center mb-2 font-semibold">Anime Merch Site</h2>
          <p className="text-center">
            This project is an anime merchandise ecommerce site. Merch such as
            t-shirts, hoodies and keychains are available. There is also a
            contribution form. It's created using react
          </p>
          <div className="w-[100%] flex justify-around mt-3">
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
          <h2 className="text-center mb-2 font-semibold">Techware Ent. Ltd.</h2>
          <p className="text-center">
            This is an ecommerce website that I build for a company called
            Techware Enterprises Ltd. It is created using wordpress and the
            payment system uses PayPal.
          </p>
          <div className="w-[100%] flex justify-around mt-3">
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
        <div
          className={`p-4 border-[2px] rounded-xl flex flex-col items-center ${
            isDark
              ? `bg-slate-950 border-gray-800`
              : `bg-slate-200 border-gray-200`
          }`}
        >
          <img src="connectify.PNG" alt="" className="h-[60%] mb-3" />
          <h2 className="text-center mb-2 font-semibold">Connectify</h2>
          <p className="text-center">
            Connectify is a social platform that allows users to read posts and
            follow users. To access all features one needs to be a premium
            membership. Login details are the username and zipcode for{" "}
            <a href="https://jsonplaceholder.typicode.com/users" className='font-semibold hover:font-bold hover:underline'>users</a>.
          </p>
          <div className="w-[100%] flex justify-around mt-3">
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white hover:bg-slate-100 hover:text-slate-900 hover:font-semibold`
                  : `border-black hover:bg-slate-900 hover:text-slate-100 hover:font-semibold`
              }`}
            >
              <a
                href="https://connectify-lime.vercel.app/"
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
                href="https://github.com/Calvin-Ngugi/social-platform"
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
          <img src="scheduler.PNG" alt="" className="h-[60%] mb-3" />
          <h2 className="text-center mb-2 font-semibold">
            Class Scheduling App
          </h2>
          <p className="text-center">
            This app helps students register for courses and attend their
            sessions.The lecturers can add sessions, change their time and check
            the number of student logged in to the app. It was created using
            ruby and react
          </p>
          <div className="w-[100%] flex justify-around mt-3">
            <button
              className={`cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white text-green-600 hover:bg-slate-100 hover:text-blue-950 hover:font-semibold`
                  : `border-black text-blue-950 hover:bg-slate-900 hover:text-green-600 hover:font-semibold`
              }`}
            >
              <a
                href="https://github.com/Calvin-Ngugi/class-scheduler"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
