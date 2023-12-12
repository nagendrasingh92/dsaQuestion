import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const AccordionComp = ({ question, solution }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <pre>
                            <code>
                                {solution}
                            </code>
                        </pre>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionComp;