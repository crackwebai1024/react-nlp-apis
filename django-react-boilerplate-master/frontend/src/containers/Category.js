import React, { Component } from "react";
import UserSideButton from "./UserSideButton";

class Category extends Component {
    state = {
        categories: [
            { name: "Recommendation System", items: ["Article Recommender"] },
            { name: "Classification", items: ["Sentiment Analysis", "Topic Detection", "Language Detection"] },
            { name: "Extraction", items: ["Text Summarization", "Entity Extraction", "Keyword Extraction", "Article Extraction"] },
            { name: "Text Pre-processing", items: ["Lemmatization", "Tokenize", "Convert Uppercase to Lower", "Remove Numbers", "Remove Puntuation", "Remove White Space", "Remove Stopwords"] },
            { name: "Plagarism", items: ["Plagarism"] },
        ],
    }
    render() {
        return (
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    {this.state.categories.map((item, i) =>
                        <UserSideButton id={i} name={item.name} items={item.items} />
                    )}
                </ul>
            </nav>
        )
    }
}

export default Category;