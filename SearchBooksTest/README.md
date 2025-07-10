# Prueba FrontEnd
Aplicación que se encarga de probar el funcioamiento del Front.

**Pasos para ejecutar la prueba:**
1. **Elegir ubicación del proyecto Test**
    - En la terminal, navega a la carpeta donde deseas crear el proyecto.
    - Ejecuta el comando: `mvn archetype:generate -DgroupId=com.rpd.searchbooks -DartifactId=SearchBooksTest -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false`.
       
        Donde:
        - `mvn archetype:generate` es el comando para generar un nuevo proyecto Maven.
        - `-DgroupId=com.rpd.searchbooks` define el identificador del grupo del proyecto.
        - `-DartifactId=SearchBooksTest` define el identificador del artefacto del proyecto.
        - `-DarchetypeArtifactId=maven-archetype-quickstart` especifica el arquetipo a utilizar, en este caso, un proyecto Java básico.
        - `-DinteractiveMode=false` evita que Maven solicite información adicional durante la creación del proyecto.
2. **Abrir el proyecto en la Terminal**
3. **Agregar Dependencias en Pom.xml**
    - Abre el archivo `pom.xml` en la raíz del proyecto.
    - Agrega las siguientes dependencias dentro de la etiqueta `<dependencies>`:
    ```xml
        <dependencies>
            <!-- Selenium -->
            <dependency>
                <groupId>org.seleniumhq.selenium</groupId>
                <artifactId>selenium-java</artifactId>
                <version>4.20.0</version>
            </dependency>
            <!-- Cucumber -->
            <dependency>
                <groupId>io.cucumber</groupId>
                <artifactId>cucumber-java</artifactId>
                <version>7.15.0</version>
            </dependency>
            <dependency>
                <groupId>io.cucumber</groupId>
                <artifactId>cucumber-junit</artifactId>
                <version>7.15.0</version>
                <scope>test</scope>
            </dependency>
            <!-- JUnit -->
            <dependency>
                <groupId>junit</groupId>
                <artifactId>junit</artifactId>
                <version>4.13.2</version>
                <scope>test</scope>
            </dependency>
        </dependencies>
    ```
3. **Instalar dependencias**
    - En la terminal, navega a la carpeta del proyecto y ejecuta el comando: `mvn clean install`.
    - Esto descargará e instalará las dependencias necesarias para el proyecto.
4. **Crear Estructura de Carpetas**
5. **Crear Archivos de Prueba**
6. **Ejecutar Pruebas**
    - En la terminal, navega a la carpeta del proyecto y ejecuta el comando: `mvn test`.
    - Esto ejecutará las pruebas definidas en el proyecto y mostrará los resultados en la terminal.