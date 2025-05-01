import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Skills from "./Skills";
import { motion } from "framer-motion";
import SoftSkills from "./SoftSkills";

const SkillsTab = () => {
    return (
        <div>
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        My Skills
                    </span>
                </h1>
                <motion.div
                    className="max-w-[80%] md:max-w-[500px] h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>
            <Tabs defaultValue="account" className="w-full  mx-auto">
                <TabsList style={{ maxWidth: '350px', padding: '25px 10px' }} className="flex justify-center gap-4 max-w-2l border-emerald-400/70 mx-auto border p-2 rounded-xl shadow-md">
                    <TabsTrigger
                        value="account"
                        className="text-white px-4  py-2 bg-slate-600 rounded-md w-full data-[state=active]:bg-emerald-500 transition duration-300"
                    >
                        Technical Skills
                    </TabsTrigger>
                    <TabsTrigger
                        value="password"
                        className="text-white bg-slate-600 w-full shadow-2xl px-4 py-2 rounded-md data-[state=active]:bg-emerald-500 transition duration-300"
                    >
                        Soft Skills
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="mt-6">
                    <Skills />
                </TabsContent>

                <TabsContent value="password" className="mt-6 text-center">
                    <SoftSkills />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default SkillsTab;