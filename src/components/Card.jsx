const Card = ({template, key}) => {
    return (
        <div className='main__card' key={key}>
                    <div className='main__card__header'>
                        <h2 className='main__card__header__text'>{template.name}</h2>
                    </div>
                    <div className='main__card__body'>
                        <p className='main__card__body__text'>
                            {template.description}
                        </p>
                    </div>
                    <div className='main__card__footer'>
                        <a href={template.link} target="_blank" rel="noopener noreferrer" className='main__card__footer__text'>
                            Use Template
                        </a>
                    </div>
                    
                </div>
    );
}

export default Card;
