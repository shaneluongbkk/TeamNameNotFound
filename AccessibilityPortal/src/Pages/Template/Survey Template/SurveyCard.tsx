import React, {useState} from "react";
import "./QuestionCard.scss";


//interface SurveyCardProps{
    //question: string;
    //answers: string[];
//}

function SurveyCard() {


    return(
        <div className="question-card">
            <div className="card">
                <div className="card-body">
                    <div className="question" aria-label="Question"></div>
                    <div className="answer">
                       
                        
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default SurveyCard;