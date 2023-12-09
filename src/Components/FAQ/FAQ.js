import './FAQ.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PlusIcon from './PlusIcon.png'

export default () => {
    return (
        <>
        <div className="faq-wrapper">
            <h1>FAQ</h1>
            <div className='faq-flex'>
                <div className='faq-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
                <div className='faq-accordion'>
                    <Accordion>
                        <AccordionSummary
                        expandIcon= {<img src={PlusIcon} alt='plus'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography>Do I need a personal injury report?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='typography-white'>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<img src={PlusIcon} alt='plus'/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                            <Typography>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='typography-white'>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon= {<img src={PlusIcon} alt='plus'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography>What should I do right after car accident</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='typography-white'>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon= {<img src={PlusIcon} alt='plus'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='typography-white'>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
        </>
    )
}