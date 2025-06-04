import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src={"/images/project1.png"} alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>Simplify your travel with Trippr – the app that puts on-demand rides at your fingertips.</h2>
                            <p className="text-white-50 md:text-x1">
                                Built with React Native, Expo, and TailwindCSS for a sleek, high-performance user experience.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
