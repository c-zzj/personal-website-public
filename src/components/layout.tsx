import * as React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql } from 'gatsby';

import nightwind from 'nightwind/helper';

const Layout = ({ pageTitle, current, children }: any) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const linkStyle = "text-slate-900 hover:text-cyan-600";
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
            </Helmet>
            <div className="bg-neutral-200 bg-cover w-screen h-full min-h-screen text-slate-900 flex flex-col">
                <div className="container px-5 mx-auto max-w-4xl grow">
                    <nav>
                        <ul className="pb-3 border-b-2 border-slate-300
                         flex flex-row space-x-5 justify-end pt-5 font-semibold text-slate-500">
                            <li>
                                {
                                    current === "Home" ? "Home" : (
                                        <Link to="/" className={linkStyle}>
                                            Home
                                        </Link>
                                    )
                                }
                            </li>
                            <li>
                                <a href="/cv.pdf" target="_blank" className={linkStyle}>CV</a>
                            </li>
                            <li>
                                {
                                    current === "Daju" ? "Daju" : (
                                        <Link to="/daju" className={linkStyle}>
                                            Daju
                                        </Link>
                                    )
                                }
                            </li>
                            <li>
                                {
                                    current === "Blog" ? "Blog" : (
                                        <Link to="/blog" className={linkStyle}>
                                            Blog
                                        </Link>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={() => { nightwind.toggle(); setIsDark(!isDark) }}>
                                    {isDark ? (<span>🌖</span>) : (<span>🌒</span>)}
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <main>
                        <h1 className="pt-5 pb-10 text-neutral-500 font-thin text-5xl">
                            {pageTitle}
                        </h1>
                        {children}
                    </main>
                </div>
                <footer className="flex place-content-center px-5 py-3 w-screen place-self-end bottom-0 bg-neutral-300 bg-cover ">
                    <small>
                        &copy; Copyright 2022, Zijun Zhao. This site is powered by&nbsp;
                        <a href="https://www.gatsbyjs.com/" target="_blank" className="text-cyan-700 hover:text-cyan-900">Gatsby</a>,
                        styled with <a href="https://tailwindcss.com/" target="_blank" className="text-cyan-700 hover:text-cyan-900">Tailwind</a>.
                    </small>
                </footer>
            </div>
        </>
    )
};

export default Layout;