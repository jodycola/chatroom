module ApplicationCable
  class Channel < ActionCable::Channel::Base

    def connection_info
      connections = []
      connection.server.connections.each do |subscriber|
          hash = {}
          hash[:current_user] = subscriber.current_user
          hash[:subscriptions_identifiers] = subscriber.subscriptions.identifiers.map {|k| JSON.parse k}
          connections << hash
      end
      connections_array
    end

  end
end
