import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import enrollmentStart from "../../images/enroll-start.5c851311.svg";
import enrollmentEnd from "../../images/enroll-end.a5ad3b91.svg";
import classStar from "../../images/class-start.c18dd2cd.svg";
import orientation from "../../images/orientation.b5b0f0e7.svg";
import "./CourseOutline.css";

function CourseOutline() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <section style={{display: "flex", justifyContent: "center",marginTop: "6rem"}}>
        <div className='course-outline-container'>
        <div className='course-time'>
            <div className='course-timing'>
                <div className='m-b-2'>
                    <div className='d-flex  m-b-2'>
                        <div className='m-r-2'>
                            <img src ={enrollmentStart}/>
                        </div>
                        <div>
                            <p>এনরোলমেন্ট শুরু</p>
                            <p>February 16, 2023</p>
                        </div>
                    </div>
                    <div className='d-flex  m-b-2'>
                        <div className='m-r-2'>
                        <img src ={enrollmentEnd}/>
                        </div>
                        <div>
                            <p>এনরোলমেন্ট শেষ</p>
                            <p>February 23, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='m-b-2'>
                    <div className='d-flex m-b-2'>
                        <div className='m-r-2'>
                            <img src ={orientation}/>
                        </div>
                        <div>
                            <p>ব্যাচের ওরিয়েন্টশন</p>
                            <p>February 24, 2023 </p>
                        </div>
                    </div>
                    <div className='d-flex  m-b-2'>
                        <div className='m-r-2'>
                            <img src ={classStar}/>
                        </div>
                        <div>
                            <p>ক্লাস শুরু</p>
                            <p>February 25, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className='price primary-color'>কোর্স ফি <del>1000</del> 500 টাকা on 50% discount</p>
        </div>
        <div className='outline-text secondary-color' id="Course">
            <h1 className='primary-color'>এই কোর্স থেকে আপনি যা যা <br/>শিখতে পারবেন</h1>
        </div>
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 1: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Introduction to C Programming</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Overview of the C programming language
                </Typography>
                <Typography>
                    - Setting up a development environment
                </Typography>
                <Typography>
                    - Basic syntax and structure of a C program
                </Typography>
                <Typography>
                    - Data types and variables in C
                </Typography>
                <Typography>
                    - Input and output in C using printf and scanf
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 2: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Conditional statements and Loops</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Conditional statements (if, if-else, nested if)
                </Typography>
                <Typography>
                    - Loops (for, while, do-while)
                </Typography>
                <Typography>
                    - Understanding control structures
                </Typography>
                <Typography>
                    - Writing programs that use conditional statements and loops
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 3: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Arrays and Strings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Introduction to arrays and strings in C
                </Typography>
                <Typography>
                    - Creating and initializing arrays
                </Typography>
                <Typography>
                    - String handling functions (strlen, strcmp, strcpy)
                </Typography>
                <Typography>
                    - 2D arrays and string manipulation
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 4: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Functions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Introduction to functions in C
                </Typography>
                <Typography>
                    - Creating and calling functions
                </Typography>
                <Typography>
                    - Functions with parameters and return values
                </Typography>
                <Typography>
                    - Understanding the scope of variables
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 5: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Pointers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Introduction to pointers in C
                </Typography>
                <Typography>
                    - Pointers and arrays
                </Typography>
                <Typography>
                    - Dynamic memory allocation
                </Typography>
                <Typography>
                    - Understanding pointer arithmetic
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 6: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Structures and Unions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Introduction to structures and unions in C
                </Typography>
                <Typography>
                    - Defining and using structures
                </Typography>
                <Typography>
                    - Nested structures and arrays of structures
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 7: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>File I/O</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Reading and writing to files in C
                </Typography>
                <Typography>
                    - Opening, reading and writing text files
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8bh-content"
                id="panel8bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Week 8-9: 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Problem-Solving</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    - Introduction to problem-solving using C
                </Typography>
                <Typography>
                    - Basic algorithms and data structures (sorting, searching, etc.)
                </Typography>
                <Typography>
                    - Debugging techniques and error handling
                </Typography>
                <Typography>
                    - Writing programs to solve problems
                </Typography>
                </AccordionDetails>
            </Accordion>
           
        </div>
        </div>
    </section>
  )
}

export default CourseOutline