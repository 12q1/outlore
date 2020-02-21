echo "Setting up env vars...."

echo "Enter the NewsAPI key"
read key
export NEWSAPIKEY=$key

echo "Enter the port"
read port
export PORT=$port

echo "Enter the JWT secret"
read secret
export JWT_SECRET=$secret

echo "Starting dev server"
cd ..
yarn dev