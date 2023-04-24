import githubIcon from '@/assets/projects/githubIcon.svg';
import githubIconColor from '@/assets/projects/githubIconColor.svg';
import javascriptIcon from '@/assets/projects/javascriptIcon.svg';
import javascriptIconColor from '@/assets/projects/javascriptIconColor.svg';
import mysqlIcon from '@/assets/projects/mysqlIcon.svg';
import mysqlIconColor from '@/assets/projects/mysqlIconColor.svg';
import postgresqlIcon from '@/assets/projects/postgresqlIcon.svg';
import postgresqlIconColor from '@/assets/projects/postgresqlIconColor.svg';
import reactIcon from '@/assets/projects/reactIcon.svg';
import reactIconColor from '@/assets/projects/reactIconColor.svg';
import tailwindIcon from '@/assets/projects/tailwindIcon.svg';
import tailwindIconColor from '@/assets/projects/tailwindIconColor.svg';
import typescriptIcon from '@/assets/projects/typescriptIcon.svg';
import typescriptIconColor from '@/assets/projects/typescriptIconColor.svg';
import nextIcon from '@/assets/projects/nextIcon.svg';
import nextIconColor from '@/assets/projects/nextIconColor.svg';
import nodeIcon from '@/assets/projects/nodeIcon.svg';
import nodeIconColor from '@/assets/projects/nodeIconColor.svg';
import htmlIcon from '@/assets/projects/htmlIcon.svg';
import htmlIconColor from '@/assets/projects/htmlIconColor.svg';
import { ImageWithHover } from './TechIcon';

export const TechStack = () => {

    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-24">
                <ImageWithHover alt='html icon' title='HTML' src={htmlIcon} hoverSrc={htmlIconColor} />
                <ImageWithHover alt='tailwind icon' title='Tailwind' src={tailwindIcon} hoverSrc={tailwindIconColor} />
                <ImageWithHover alt='javascript icon' title='JavaScript' src={javascriptIcon} hoverSrc={javascriptIconColor} />
                <ImageWithHover alt='typescript icon' title='TypeScript' src={typescriptIcon} hoverSrc={typescriptIconColor} />
                <ImageWithHover alt='nodejs icon' title='NodeJS' src={nodeIcon} hoverSrc={nodeIconColor} />
                <ImageWithHover alt='react icon' title='React' src={reactIcon} hoverSrc={reactIconColor} />
                <ImageWithHover alt='nextjs icon' title='NextJS' src={nextIcon} hoverSrc={nextIconColor} />
                <ImageWithHover alt='postgresql icon' title='PostgreSQL' src={postgresqlIcon} hoverSrc={postgresqlIconColor} />
                <ImageWithHover alt='mysql icon' title='MySQL' src={mysqlIcon} hoverSrc={mysqlIconColor} />
                <ImageWithHover alt='github icon' title='Github' src={githubIcon} hoverSrc={githubIconColor} />
            </div >
        </>
    )
}

