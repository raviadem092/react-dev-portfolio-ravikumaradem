import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import ChatBot from "./components/chatbot";
function App() {
    const [mode, setMode] = useState<string>('dark');
    const [chatRequest, setChatRequest] = useState<{ id: number; text: string } | null>(null);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const askRavi = (text: string) => {
      const question = text.trim();
      if (question) setChatRequest({ id: Date.now(), text: question });
    };

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main onAsk={askRavi}/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
            <Footer />
        </FadeIn>
        <ChatBot chatRequest={chatRequest} onRequestHandled={() => setChatRequest(null)} />
    </div>
    );
}

export default App;
