import sys
from transformers import pipeline
from fastapi import FastAPI

#if len(sys.argv) != 2:
#    print('Usage: python model_test.py <input_string>')
#    sys.exit(1)
#
#text = sys.argv[1]

# Instantiate a pipeline object with our task and model passed as parameters

nlp = pipeline('sentiment-analysis', model='nlptown/bert-base-multilingual-uncased-sentiment')
app = FastAPI()


@app.get('/')
def get_root():
    return {'message': 'This is the sentiment analysis app'}


@app.get('/sentiment_analysis/')
async def query_sentiment_analysis(text: str):
    return analyze_sentiment(text)


def analyze_sentiment(text):
    """Get and process r  prob = result[0]['score']

    # Format and return results
    return {'sentiment': sent, 'probability': prob}esult"""

    result = nlp(text)

    sent = ''
    if (result[0]['label'] == '1 star'):
        sent = 'very negative'
    elif (result[0]['label'] == '2 star'):
        sent = 'negative'
    elif (result[0]['label'] == '3 stars'):
        sent = 'neutral'
    elif (result[0]['label'] == '4 stars'):
        sent = 'positive'
    else:
        sent = 'very positive'

  