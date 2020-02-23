from django.shortcuts import render
import requests

from rest_framework import status 
from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request): 
    return render(request, 'fight/index.html')

def getCommonTypes(x,y): 
    common = []
    for a in x: 
        for b in y: 
            if a == b and a not in common: 
                common.append(a)
    return common

def damageTo(url, vname, damage): 
    score = 0 
    type = requests.get(url).json()
    damage_to = type['damage_relations'][damage]
    for a in damage_to: 
        if a['name'] == vname: 
            if damage == 'double_damage_to': 
                score += 4
            if damage == 'half_damage_to': 
                score += 1
    return score

def typeFight(x, y): 
    score_counter = {'one': 0, 'two': 0}
    type_x = x['types']
    type_y = y['types']
    for i in type_x: 
        for j in type_y: 
            score_counter['one'] += damageTo(i['type']['url'], j['type']['name'], 'double_damage_to')
            score_counter['two'] += damageTo(j['type']['url'], i['type']['name'], 'double_damage_to')
            score_counter['one'] += damageTo(i['type']['url'], j['type']['name'], 'half_damage_to')
            score_counter['two'] += damageTo(j['type']['url'], i['type']['name'], 'half_damage_to')

    return max(score_counter, key=score_counter.get)

@api_view(['POST'])
def fight(request): 
    if request.method == 'POST': 
        winner = {'id': None}
        base_url = 'https://pokeapi.co/api/v2/'
        pokemon = base_url + 'pokemon/'
        pokemons = request.data
        pokemon_one =  requests.get(pokemon + pokemons['one']).json()
        pokemon_two =  requests.get(pokemon + pokemons['two']).json()

        type = base_url + 'type/'
        
        common = getCommonTypes(pokemon_one['types'], pokemon_two['types'])

        if  pokemon_one['types'] == None or pokemon_one['types'] == None: 
            if sum(pokemon_one['stats'], 'base_stat') > sum(pokemon_two['stats'], 'base_stat'):
                winner['id'] = pokemons['one']
            else: 
                winner['id'] = pokemons['two']
        else: 
            if len(pokemon_one['types']) == len(pokemon_two['types']) == len(common):
                winner['id'] = pokemons['one']
            else: 
                type_winner = typeFight(pokemon_one, pokemon_two)
                winner['id'] = pokemons[type_winner]


        return Response(winner)