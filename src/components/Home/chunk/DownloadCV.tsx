import AnimatedText from '../../AnimatedText';

const DownloadCV = () => {
    return (
        <a
            href="/portfolio.pdf"
            target={'_blank'}
            className="magic-puffIn"
            rel="noreferrer"
        >
            <div className="downloadCVWrapper">
                {/* Background text `</>` */}
                <div className="background absolute top-0 left-0 z-10 flex h-full w-full -rotate-45 items-center justify-center text-[13rem] font-black opacity-20 ">{`</>`}</div>
                {/* Download CV btn */}

                <AnimatedText
                    as="div"
                    className="hoverBox 0 absolute z-50 flex h-full w-full cursor-pointer items-center justify-center transition-all duration-500 "
                    text={`<Download CV/>`}
                />
                {/* Box that pop */}
                <div className="popBox absolute top-1/2 left-1/2 z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-500"></div>

                {/* Spinner */}
                <div className="arc arc-1"></div>
                <div className="arc arc-2"></div>
                <div className="arc arc-3"></div>
            </div>
        </a>
    );
};

export default DownloadCV;