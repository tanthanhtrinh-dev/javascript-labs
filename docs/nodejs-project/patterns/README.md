# [Node.js with Multiple Design Patterns](https://blog.bitsrc.io/nodejs-with-multiple-design-patterns-bfa0cc9e403b)

## Patterns
- Singleton Pattern
- Factory Pattern
- Middleware Pattern
- Observer Pattern
- Strategy Pattern

## Comparison
**Singleton Pattern**
Elements: Singleton class, constructor, static getInstance() method, shared instance variable, private constructor.
Purpose: Ensure that only one instance of a class is created and shared across the application.
Benefits: Avoids creating multiple instances of the same object, ensures consistency and centralized control of shared resources.

**Factory Pattern**
Elements: Factory class, create method(s), product class(es), product creation logic, abstract product class (optional).
Purpose: Create objects without exposing the creation logic to the client, allow for flexibility and customization of object creation.
Benefits: Encapsulates the object creation process, reduces coupling between client code and object creation logic, simplifies object instantiation.

**Middleware Pattern**
Elements: Middleware class, handle() method, next() function or middleware chain, request and response objects.
Purpose: Define a chain of handlers that can be used to process requests or data in a modular way.
Benefits: Promotes modularity and scalability, reduces code duplication, simplifies implementation of complex processing logic, allows for flexibility and customization of processing logic.

**Observer Pattern**
Elements: Subject class, observer class(es), registerObserver() and removeObserver() methods, notifyObservers() method, update() method in observers.
Purpose: Define a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically.
Benefits: Promotes decoupling between objects, improves scalability and modularity, allows for dynamic composition of objects and behavior.

**Strategy Pattern**
Elements: Context class, strategy interface or class, concrete strategy classes, setStrategy() and executeStrategy() methods.
Purpose: Define a family of algorithms, encapsulate each one, and make them interchangeable, depending on the context or environment.
Benefits: Encapsulates the algorithm or behavior logic, promotes flexibility and customization of behavior, simplifies code maintenance and testing.