import Navbar from '@import/components/Navbar';
import Sidebar from '@import/components/Sidebar';
import useLocalStorage from 'use-local-storage';

const HomePage = () => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage(
  //   'theme',
  //   defaultDark ? 'dark' : 'light'
  // );
  // const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="home-page">
      <Navbar sidebarOpen={true} />
      <Sidebar />
    </div>
  );
};

export default HomePage;
