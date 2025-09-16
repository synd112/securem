# securem

This application was generated using JHipster 8.11.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v8.11.0](https://www.jhipster.tech/documentation-archive/v8.11.0).

## Project Structure

Node is required for generation and recommended for development. `package.json` is always generated for a better development experience with prettier, commit hooks, scripts and so on.

In the project root, JHipster generates configuration files for tools like git, prettier, eslint, husky, and others that are well known and you can find references in the web.

`/src/*` structure follows default Java structure.

- `.yo-rc.json` - Yeoman configuration file
  JHipster configuration is stored in this file at `generator-jhipster` key. You may find `generator-jhipster-*` for specific blueprints configuration.
- `.yo-resolve` (optional) - Yeoman conflict resolver
  Allows to use a specific action when conflicts are found skipping prompts for files that matches a pattern. Each line should match `[pattern] [action]` with pattern been a [Minimatch](https://github.com/isaacs/minimatch#minimatch) pattern and action been one of skip (default if omitted) or force. Lines starting with `#` are considered comments and are ignored.
- `.jhipster/*.json` - JHipster entity configuration files

- `npmw` - wrapper to use locally installed npm.
  JHipster installs Node and npm locally using the build tool by default. This wrapper makes sure npm is installed locally and uses it avoiding some differences different versions can cause. By using `./npmw` instead of the traditional `npm` you can configure a Node-less environment to develop or test your application.
- `/src/main/docker` - Docker configurations for the application and services that the application depends on

## Development

The build system will install automatically the recommended version of Node and npm.

We provide a wrapper to launch npm.
You will only need to run this command when dependencies change in [package.json](package.json).

```
./npmw install
```

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

```
./mvnw
./npmw start
```

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `./npmw update` and `./npmw install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `./npmw help update`.

The `./npmw run` command will list all the scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's turned off by default. One of the main components of a PWA is a service worker.

The service worker initialization code is commented out by default. To enable it, uncomment the following code in `src/main/webapp/index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
      console.log('Service Worker Registered');
    });
  }
</script>
```

Note: [Workbox](https://developers.google.com/web/tools/workbox/) powers JHipster's service worker. It dynamically generates the `service-worker.js` file.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

```
./npmw install --save --save-exact leaflet
```

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

```
./npmw install --save-dev --save-exact @types/leaflet
```

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

## Building for production

### Packaging as jar

To build the final jar and optimize the securem application for production, run:

```
./mvnw -Pprod clean verify
```

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

```
java -jar target/*.jar
```

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

```
./mvnw -Pprod,war clean verify
```

### JHipster Control Center

JHipster Control Center can help you manage and control your application(s). You can start a local control center server (accessible on http://localhost:7419) with:

```
docker compose -f src/main/docker/jhipster-control-center.yml up
```

## Testing

### Spring Boot tests

To launch your application's tests, run:

```
./mvnw verify
```

### Client tests

Unit tests are run by [Jest][]. They're located near components and can be run with:

```
./npmw test
```

## Others

### Code quality using Sonar

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker compose -f src/main/docker/sonar.yml up -d
```

Note: we have turned off forced authentication redirect for UI in [src/main/docker/sonar.yml](src/main/docker/sonar.yml) for out of the box experience while trying out SonarQube, for real use cases turn it back on.

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the maven plugin.

Then, run a Sonar analysis:

```
./mvnw -Pprod clean verify sonar:sonar -Dsonar.login=admin -Dsonar.password=admin
```

If you need to re-run the Sonar phase, please be sure to specify at least the `initialize` phase since Sonar properties are loaded from the sonar-project.properties file.

```
./mvnw initialize sonar:sonar -Dsonar.login=admin -Dsonar.password=admin
```

Additionally, Instead of passing `sonar.password` and `sonar.login` as CLI arguments, these parameters can be configured from [sonar-project.properties](sonar-project.properties) as shown below:

```
sonar.login=admin
sonar.password=admin
```

For more information, refer to the [Code quality page][].

### Docker Compose support

JHipster generates a number of Docker Compose configuration files in the [src/main/docker/](src/main/docker/) folder to launch required third party services.

For example, to start required services in Docker containers, run:

```
docker compose -f src/main/docker/services.yml up -d
```

To stop and remove the containers, run:

```
docker compose -f src/main/docker/services.yml down
```

[Spring Docker Compose Integration](https://docs.spring.io/spring-boot/reference/features/dev-services.html) is enabled by default. It's possible to disable it in application.yml:

```yaml
spring:
  ...
  docker:
    compose:
      enabled: false
```

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a Docker image of your app by running:

```sh
npm run java:docker
```

Or build a arm64 Docker image when using an arm64 processor os like MacOS with M1 processor family running:

```sh
npm run java:docker:arm64
```

Then run:

```sh
docker compose -f src/main/docker/app.yml up -d
```

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the Docker Compose sub-generator (`jhipster docker-compose`), which is able to generate Docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

## Deploying with Docker

This application supports a modern deployment architecture where the frontend (Nginx) and backend (Spring Boot) components can be deployed and scaled independently.

### Prerequisites

- Docker and Docker Compose installed
- Java 17 or later
- Node.js (for frontend development)

### Building the Application Components

#### Building the Backend (Spring Boot Application)

1. Build the backend JAR file:

```bash
./mvnw -Pprod clean verify
```

2. Build the Docker image for the backend:

```bash
./mvnw -Pprod jib:dockerBuild
```

#### Building the Frontend (Nginx)

1. Build the frontend production assets:

```bash
./npmw run build
```

The frontend assets will be generated in the `target/classes/static` directory, which will be mounted to the Nginx container.

### Deploying the Application

You can deploy the entire application (frontend, backend, and database) using Docker Compose:

```bash
cd src/main/docker
docker-compose -f app-separated.yml up -d
```

This will start one instance of each service defined in the `app-separated.yml` file.

### Scaling Services Independently

One of the key advantages of this architecture is the ability to scale frontend and backend services independently.

#### Scaling the Backend

To scale the backend service to multiple instances (e.g., 3 instances):

```bash
docker-compose -f src/main/docker/app-separated.yml up -d --scale backend=3
```

This will start 3 instances of the backend service. The Nginx service will automatically distribute requests across all backend instances using Docker's built-in service discovery and DNS resolution.

#### Scaling the Frontend

To scale the frontend service to multiple instances (e.g., 2 instances):

```bash
docker-compose -f src/main/docker/app-separated.yml up -d --scale frontend=2
```

Note: When scaling the frontend, you'll need an additional load balancer (such as a cloud provider's load balancer) in front of your Nginx instances to distribute incoming traffic.

### Verifying Deployed Services

To check the status of your deployed services:

```bash
docker-compose -f src/main/docker/app-separated.yml ps
```

To view logs from a specific service:

```bash
# View backend logs
docker-compose -f src/main/docker/app-separated.yml logs backend

# View frontend logs
docker-compose -f src/main/docker/app-separated.yml logs frontend
```

### Deploying Frontend and Backend Separately

For completely independent deployment and scaling of frontend and backend, you can create separate Docker Compose files:

#### Backend Only Deployment (backend.yml)

Create a new file `src/main/docker/backend.yml`:

```yaml
name: securem-backend
services:
  backend:
    image: securem:latest
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - MANAGEMENT_METRICS_EXPORT_PROMETHEUS_ENABLED=true
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/securem?useUnicode=true&characterEncoding=utf8&useSSL=false&useLegacyDatetimeCode=false&serverTimezone=UTC&createDatabaseIfNotExist=true
      - SPRING_LIQUIBASE_URL=jdbc:mysql://mysql:3306/securem?useUnicode=true&characterEncoding=utf8&useSSL=false&useLegacyDatetimeCode=false&serverTimezone=UTC&createDatabaseIfNotExist=true
    ports:
      - '8080:8080'
    depends_on:
      - mysql
    networks:
      - app-network

  mysql:
    image: mysql:8.0.33
    volumes:
      - mysql-data:/var/lib/mysql
    environment:
      - MYSQL_ALLOW_EMPTY_PASSWORD=yes
      - MYSQL_DATABASE=securem
    command: mysqld --lower_case_table_names=1 --skip-ssl --character_set_server=utf8mb4 --explicit_defaults_for_timestamp
    networks:
      - app-network

volumes:
  mysql-data:

networks:
  app-network:
    driver: bridge
```

Deploy and scale backend:

```bash
docker-compose -f src/main/docker/backend.yml up -d --scale backend=3
```

#### Frontend Only Deployment (frontend.yml)

Create a new file `src/main/docker/frontend.yml`:

```yaml
name: securem-frontend
services:
  frontend:
    image: nginx:alpine
    ports:
      - '80:80'
    volumes:
      - ../webapp/dist/:/usr/share/nginx/html/
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
    environment:
      - BACKEND_API_URL=http://backend-service-url:8080
    networks:
      - frontend-network

networks:
  frontend-network:
    driver: bridge
```

Deploy and scale frontend:

```bash
docker-compose -f src/main/docker/frontend.yml up -d --scale frontend=2
```

### Load Testing Your Scaled Deployment

To verify that your load balancing is working correctly across multiple backend instances, you can perform a simple load test:

```bash
# Install Apache Benchmark tool (if not already installed)
# For macOS:
brew install apache-bench

# For Ubuntu/Debian:
apt-get install apache2-utils

# Run a load test (100 requests with 10 concurrent connections)
ab -n 100 -c 10 http://localhost/api/your-endpoint
```

Monitor the logs of your backend instances to verify that requests are being distributed across all instances.

## Troubleshooting

### Container Networking Issues

If you're having issues with containers communicating with each other:

```bash
# Check the Docker networks
docker network ls

# Inspect the app-network
docker network inspect docker_app-network
```

### Checking Nginx Configuration

To verify your Nginx configuration is correct:

```bash
# Exec into the Nginx container
docker exec -it securem-frontend-1 sh

# Check the Nginx configuration
nginx -t

# View the Nginx logs
cat /var/log/nginx/error.log
```
