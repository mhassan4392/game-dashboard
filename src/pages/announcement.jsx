import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "@/context/language";
import Axios from "@/utils/axios";
import Spinner from "@/components/Spinner/Spinner";
import { AnimatePresence, motion } from "framer-motion";
const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);

  const { lan } = useContext(LanguageContext);

  useEffect(() => {
    setLoading(true);
    Axios({ url: "/api/ox/get5msg", method: "POST", data: { lan } }).then(
      (res) => {
        setAnnouncements(res.data || []);
        setLoading(false);
      }
    );
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="loading"
          className="h-full flex items-center justify-center"
        >
          <Spinner />
        </motion.div>
      )}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="announcements"
          className="p-4 scrollbar overflow-auto h-full"
        >
          <h2 className="my-5 text-white text-lg">Announcements</h2>
          <hr className="opacity-25 my-4" />
          {announcements.map((a, i) => (
            <div key={i}>
              <div>
                <p className="text-sm">{a[1]}</p>
                <div className="mt-4 text-xs">
                  {a[0]}
                  {/* &nbsp; | &nbsp; 20:08:51 */}
                </div>
              </div>
              <hr className="opacity-25 my-4" />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Announcement;
