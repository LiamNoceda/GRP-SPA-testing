import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { GrMain, GrAside } from "./spaces/GrSp";
import { ProfileMain, ProfileAside } from "./spaces/GrPr";

function GrSpace({ main: MainComponent, aside: AsideComponent }) {
    return (
        <div className='space'>
            <nav className='nav-sp'>
                <Link to='/grps'>
                    <button type='button'>Account</button>
                </Link>
                <Link to='/profile' style={{ marginTop: '12px' }}>
                    <button type='button'>Profile</button>
                </Link>
            </nav>

            <main className='main-sp'>
                <MainComponent />
            </main>

            <aside className='aside-sp'>
                <AsideComponent />
            </aside>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/grps" replace />} />

                <Route path="/grps" element={
                    <GrSpace main={GrMain} aside={GrAside} />
                } />
                
                <Route path="/profile" element={
                    <GrSpace main={ProfileMain} aside={ProfileAside} />
                } />
            </Routes>
        </Router>
    );
}

export default App;
