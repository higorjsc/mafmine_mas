# Selection of Mine Acess for Underground Mining

A web-based decision-support tool for mining engineers to evaluate and select underground access and ore transport systems (shaft, ramp & trucks, inclined belt conveyor) based on three established methodologies. Developed with Java Script and Vue.js.

## Features

- **Methodology Comparison**:  
  Evaluate systems using **Cardozo (2023)**, **La Vergne (2003)**, or **Moser (1996)** methodologies. Cardozo's method combines and modernizes La Vergne's flowchart layout with Moser's parameters.
- **Interactive Flowcharts**:  
  Color-coded flowcharts update in real-time as users input deposit characteristics (depth, production rate, rock mass quality).
- **Dynamic System Visualization**:  
  Illustrates access/transport systems (shaft, ramp, conveyor) based on selected parameters.
- **Early-Phase Decision Support**:  
  Designed for conceptual mining projects with limited geological data. Part of the **Mafmine** software suite for economic evaluation.
- **Preliminary Guidance**:  
  Streamlines initial planning efforts but does not replace detailed feasibility studies.

## Technologies Used
- Vue.js (State management: Vuex | Routing: Vue Router)
- JavaScript (ES6+)
- CSS3

## How to Use

1. **Access the Application**:  
   Deploy locally or visit the [mafmine tools website](https://www.mafmine.com.br/v3.1/tools/mas/index.html#/cardozo).

2. **Select Methodology**:  
   Choose between Cardozo (2023), La Vergne (2003), or Moser (1996) from the dropdown.

3. **Input Parameters**:  
   Complete forms with:
   - Deposit depth
   - Annual production rate
   - Rock mass quality (RMR)
   - Geotechnical constraints

4. **Analyze Results**:  
   - Observe color changes in the flowchart indicating recommended systems.
   - View dynamic illustrations of suggested access/transport configurations.

5. **Export/Compare**:  
   Export results or compare outcomes across methodologies.

**Note**: This tool provides preliminary guidance. Always conduct detailed feasibility studies for final decisions.

## Architecture

The application is designed to be modular and scalable, ensuring that new features can be easily added.

- **State Management**:  
  Vuex stores methodology rules, user inputs, and flowchart logic.
- **Responsive Design**:  
  CSS media queries for cross-device compatibility.

## Contributions

This project is continuously evolving, and contributions to improvement are welcome. 

### Institutional Support
This work was developed with the support of:  
- **Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)**: For funding and fostering scientific research in Brazil.  
  [![CNPq](https://img.shields.io/badge/Supported%20by-CNPq-blue)](https://www.gov.br/cnpq/)  
- **Universidade Federal do Rio Grande do Sul (UFRGS)**: For providing academic infrastructure and resources.  
  [![UFRGS](https://img.shields.io/badge/Affiliated%20with-UFRGS-red)](https://www.ufrgs.br/)  

---

### How to Contribute
We welcome contributions from the community! Here’s how you can help:  
1. **Report Bugs**: Open an issue on GitHub to document problems or suggestions.  
2. **Improve Code**: Fork the repository, make changes, and submit a pull request.  
3. **Enhance Documentation**: Help improve user guides or translate content. 

## License

This project is licensed under the MIT License - see the LICENSE file for more details.

## References

### Methodologies
1. **Cardozo (2023)**:  
   Combines La Vergne's flowchart structure with Moser's parameters, updated for 2023 mining realities.  
   - *Reference*: CARDOZO, F. A. C. et al. *Choice of access for underground mining for feasibility studies*. REM-International Engineering Journal, 2023.

2. **La Vergne (2003)**:  
   "Superficial guide" with rules-of-thumb for preliminary analysis. Depth/production limits reflect 2003 tech.  
   - *Reference*: LA VERGNE, J. *Hard rock miner's handbook*. McIntosh Engineering, 2003.

3. **Moser (1996)**:  
   Hard-rock focused model excluding belt conveyors. Limits outdated but useful for early screening.  
   - *Reference*: MOSER, P. *Primary development of underground hard rock mines*. Symposium On Mine Planning And Equipment Selection, 1996.

---

**Related Research**:  
- CARDOZO, F. A. C. *Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina*. PhD Thesis, UFRGS, 2023.  
- Mafmine Software Suite: Economic evaluation tools for early-stage mining projects.